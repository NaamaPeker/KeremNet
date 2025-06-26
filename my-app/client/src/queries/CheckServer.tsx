import { data, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CheckServer() {
  const [serverRes, seServertRes] = useState<boolean>(false);

  useEffect(() => {
  fetch('http://localhost:3001/running')
    .then(res => res.json())
    .then(data => console.log(data.message))
    .catch(err => console.error('Server is not running:', err));
}, []);

    return(<div>{data.toString()}</div>);
}

export default CheckServer;