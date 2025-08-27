import Window from "../../components/Window/Window";
import { FocusIcons } from "../../components/FocusIcons/FocusIcons";
import {
  NextjsIcon,
  ReactIcon,
  NodejsIcon,
  ExpressjsIcon,
  MongoDBIcon,
  PostgreSQLIcon,
  TailwindIcon,
  PrismaIcon,
  DockerIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  HTMLIcon,
  CSSIcon,
  VSCodeIcon,
  PostmanIcon,
  JestIcon,
  MochaIcon,
} from "../../components/Icons";

const Stack = () => {
  const SIZE = "w-6 h-6";
  return (
    <Window title="Stack">
      <FocusIcons
        icons={[
          <HTMLIcon className={SIZE} />,
          <CSSIcon className={SIZE} />,
          <JavaScriptIcon className={SIZE} />,
          <TypeScriptIcon className={SIZE} />,
          <ReactIcon className={SIZE} />,
          <NextjsIcon className={SIZE} />,
          <NodejsIcon className={SIZE} />,
          <ExpressjsIcon className={SIZE} />,
          <MongoDBIcon className={SIZE} />,
          <PostgreSQLIcon className={SIZE} />,
          <TailwindIcon className={SIZE} />,
          <PrismaIcon className={SIZE} />,
          <DockerIcon className={SIZE} />,
          <JestIcon className={SIZE} />,
          <MochaIcon className={SIZE} />,
          <PostmanIcon className={SIZE} />,
          <VSCodeIcon className={SIZE} />,
        ]}
      />
    </Window>
  );
};

export default Stack;
