import { useLocation } from 'react-router-dom';
import CommitComponent from "../components/CommitComponent";

export const Commit = () => {

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tokenWs = searchParams.get('token_ws');

  return (
    <div>
       <CommitComponent token={tokenWs}/>
    </div>
  );
}