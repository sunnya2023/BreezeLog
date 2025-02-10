import { IKImage } from "imagekitio-react";

const Image = ({ src, alt, w, h, className }) => {
  return (
    <div>
      <IKImage
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        path={src}
        alt={alt}
        width={w}
        height={h}
        loading="lazy"
        lqip={{ active: true, quality: 20 }}
        transformation={[{ height: h, width: w }]}
        className={className}
      />
    </div>
  );
};

export default Image;
