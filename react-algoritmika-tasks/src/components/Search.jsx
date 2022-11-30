import React, { useState } from 'react';

const Search = () => {
    const [data, setData] = useState([]);
    const department = ['Security', 'Management', 'Recruitment']
  const [searchLine, setSearchLine] = useState('');
  const searchClick = () => {
    setSearchLine('');
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then((res) => res.json())
      .then((obj) => setData(obj));
    };

  return (
    <div className="search">
      <input
        value={searchLine}
        onChange={(e) => setSearchLine(e.target.value)}
        type="search"
        name="search"
        id=""
      />
          <button onClick={searchClick}>Search</button>
          {data?.map(obj => (
              obj.name === searchLine ? (<p>{obj.name} {obj.department} {obj.role}</p>) : ''
          ))}
    </div>
  );
};

export default Search;
