// import { memo } from 'react';

const Demo = () => {
  const [check, setCheck] = useState();
  return (
    <div>
      <h1>Demo Component</h1>
      <input
        type="checkbox"
        value={check}
        onChange={(e) => {
          setCheck(e.target.checked);
          console.log(check);
        }}
      />

      <div>
        <p>Status: {check? 'Done': 'Not Done'}</p>
      </div>
    </div>
  );
};

export default Demo;
