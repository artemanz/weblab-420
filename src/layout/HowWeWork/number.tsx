import {
  Number1,
  Number2,
  Number3,
  Number4,
  Number5,
  Number6,
  Number7,
  Number8,
  Number9,
} from "./numbers";

type Props = {
  number: number;
};

const Number = ({ number }: Props) => {
  switch (number) {
    case 1:
      return <Number1 />;
    case 2:
      return <Number2 />;
    case 3:
      return <Number3 />;
    case 4:
      return <Number4 />;
    case 5:
      return <Number5 />;
    case 6:
      return <Number6 />;
    case 7:
      return <Number7 />;
    case 8:
      return <Number8 />;
    case 9:
      return <Number9 />;
    default:
      return null;
  }
};

export default Number;
