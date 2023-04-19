import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import VideoPlayer from "../../component/VideoPlayer";

function VideoPage() {
 

  return <VideoPlayer id={""} />;
}

export const getServerSideProps = async (context) => {
  return {
    props: { query: context.query },
  };
};

export default VideoPage;