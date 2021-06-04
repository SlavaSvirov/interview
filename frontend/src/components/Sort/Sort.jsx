import React from 'react';
import { Select } from 'antd';
import './Sort.css';

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}

const Sort = ({ onSort }) => {
  return (
    <div className="sort d-flex justify-content-between">
      <div className="sort-item" data-name="created" onClick={(e) => onSort(e)}>
        Дата создания
      </div>
      <div className="sort-item" data-name="salary" onClick={(e) => onSort(e)}>
        Зарплата
      </div>
      <div className="sort-item" data-name="rating" onClick={(e) => onSort(e)}>
        Рейтинг
      </div>
      {/* <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Станция метро"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </div> */}
    </div>
  );
};

export default Sort;
