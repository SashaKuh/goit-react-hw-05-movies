import { SyncLoader } from 'react-spinners';
import { LoaderWrapper } from './Loader.styled';

export const Loader = ({ loading }) => {
  return (
    <LoaderWrapper>
      <SyncLoader
        loading={loading}
        color="#11501b"
        margin={10}
        size={20}
        speedMultiplier={0.5}
      />
    </LoaderWrapper>
  );
};