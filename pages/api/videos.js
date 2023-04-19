import busboy from "busboy";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};



const CHUNK_SIZE_IN_BYTES = 100000; // 1 mb

function getVideoStream(req, res) {
  const range = req.headers.range;

  if (!range) {
    return res.status(400).send("Rang must be provided");
  }

  const videoId = req.query.videoId;

  const videoPath = `./videos/stt.mp4`;

  const videoSizeInBytes = fs.statSync(videoPath).size;

  const chunkStart = Number(range.replace(/\D/g, ""));

  const chunkEnd = Math.min(
    chunkStart + CHUNK_SIZE_IN_BYTES,
    videoSizeInBytes - 1
  );

  const contentLength = chunkEnd - chunkStart + 1;

  const headers = {
    "Content-Range": `bytes ${chunkStart}-${chunkEnd}/${videoSizeInBytes}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, {
    start: chunkStart,
    end: chunkEnd,
  });

  videoStream.pipe(res);
}

export default function handler(req, res) {
  const method = req.method;

  if (method === "GET") {
    return getVideoStream(req, res);
  }


  return res.status(405).json({ error: `Method ${method} is not allowed` });
}