import styled from "styled-components";


type Props = {
  children: any;
  className?: string;
};

// const Container = ({ children, className }: Props) => {
//   return (
//     <div className={classNames(classes["container"], className)}>
//       {children}
//     </div>
//   );
// };

const Container = styled.div`
  max-width: 1430px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
`

export default Container