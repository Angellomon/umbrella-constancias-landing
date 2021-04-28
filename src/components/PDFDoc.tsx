import { FunctionalComponent as FC } from "preact";
import { useEffect, useRef } from "preact/hooks";
import WebViewer from "@pdftron/webviewer";
import { LandingLayout } from "../layouts";

interface Props {
  file: string;
}

const PDFDoc: FC<Props> = ({ file }) => {
  const viewer = useRef<HTMLDivElement>();
  console.log(file);

  useEffect(() => {
    const doSet = async () => {
      let blob = await fetch(file).then((r) => r.blob());
      console.log(blob);

      WebViewer(
        {
          path: "/lib",
        },
        viewer.current
      ).then((instance) => {
        console.log(instance);

        instance.loadDocument(blob, { filename: "certificado.pdf" });

        const { docViewer } = instance;
        docViewer.on("documentLoaded", () => {
          // perform document operations
          console.log("yes");
        });
      });
    };
    doSet();
  }, []);

  console.log(viewer);

  return (
    <LandingLayout>
      <div class="webviewer" ref={viewer}></div>
    </LandingLayout>
  );
};

export default PDFDoc;
