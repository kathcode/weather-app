export default interface IWidget {
  title: string;
  subtitle?: string;
  children?: JSX.Element;
  bgColor?: string;
  value: number;
}
