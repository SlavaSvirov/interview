import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getAllFetch } from '../../redux/actions/companyAC';
import { useHistory } from 'react-router-dom';
import { Select } from 'antd';

const { Option } = Select;

const CustomAutoComplete = () => {
  let history = useHistory();
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companys);

  // ================================= ищем конкретную компанию =====
  useEffect(() => {
    const foundedCompany = companies?.find((x) => x._id === input);
    if (foundedCompany) {
      history.push(`/company`);
    }
  }, [input]);
//================================================================
  function onSearch(val) {
    dispatch(getAllFetch(val));
  }

  return (
    <Select
      showSearch
      style={{ width: 500 }}
      placeholder="Select company"
      optionFilterProp="children"
      onChange={(value) => setInput(value)}
      onSearch={onSearch}
    >
      {companies.length ? (
        companies.map((sel, indx) => (
          <Option key={indx} value={sel._id}>
            {sel.companyName}
          </Option>
        ))
      ) : (
        <Option value="jack">Ничего не найдено</Option>
      )}
    </Select>
  );
};
export default CustomAutoComplete;
