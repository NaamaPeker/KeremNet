import { useEffect, useState } from 'react';

function CheckServer() {
  const [status, setStatus] = useState<'checking' |'up'| 'down'>('checking');

  useEffect(() => {
    fetch('http://localhost:3001/Running')
      .then((res) => {
        if (res.ok) setStatus('up');
        else throw new Error('error');
      })
      .catch(() => setStatus('down'));
  }, []);

  return (
    <div>
      {status === 'checking' && <p>Checking server status...</p>}
      {status === 'up'&& <p style={{ color: 'green' }}>Server is running</p>}
      {status === 'down' && <p style={{ color: 'red' }}>Server is not running</p>}
    </div>
  );
}

export default CheckServer;
