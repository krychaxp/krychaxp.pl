import { Skeleton } from "@material-ui/lab";
import {
  ResultWrapper,
  UserWrapper,
  MainWrapper,
  Categories,
} from "../index.styles";

const OneRepo = () => {
  const rand1 = Math.floor(Math.random() * 100) + 100;
  const rand2 = Math.floor(Math.random() * 100) + 150;
  const list = Array(5).fill();
  return (
    <div>
      <Skeleton variant="text" width={rand1} height={40} />
      <Skeleton variant="text" width={rand2} height={20} />
      <Categories>
        {list.map((v, i) => {
          const rand = (Math.floor(Math.random() * 100) % 50) + 50;
          return <Skeleton key={i} variant="text" width={rand} height={20} />;
        })}
      </Categories>
    </div>
  );
};

export const Loading = ({ isLoading }) => {
  if (!isLoading) return null;
  const list = Array(6).fill();
  return (
    <ResultWrapper>
      <UserWrapper>
        <Skeleton variant="rect" width={400} height={400} />
        <Skeleton variant="text" width={300} height={50} />
        <Skeleton variant="text" width={200} height={30} />
        <Skeleton variant="text" width={250} height={30} />
        <Skeleton variant="text" width={200} height={50} />
        <Skeleton variant="text" width={250} height={70} />
        <Skeleton variant="text" width={250} height={30} />
        <Skeleton variant="text" width={200} height={50} />
      </UserWrapper>
      <MainWrapper>
        {list.map((v, i) => (
          <OneRepo key={i}/>
        ))}
      </MainWrapper>
    </ResultWrapper>
  );
};
