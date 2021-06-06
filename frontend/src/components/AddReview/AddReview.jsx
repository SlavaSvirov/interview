import { Avatar } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

import {
  Form,
  Select,
  InputNumber,
  Divider,
  Input,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  Typography,
} from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Title } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log('Upload event:', e.target.files[0]);

  if (Array.isArray(e.target.files)) {
    return e.target.files;
  }

  return e && e.target;
};

const AddReview = () => {
  const onFinish = async (values) => {
    console.log(values);
    try {
      const response = await fetch('http://localhost:3001/review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(values),
        file: values,
      });
      console.log(response);
      if (response.status === 200) {
        alert('your review was successly added');
        // window.location.assign('/profile');
      }
      if (response.status === 400) {
        alert('error in bd');
        window.location.assign('/404');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title level={2}>Создай новый отзыв!</Title>
      <Divider></Divider>

      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          'input-number': 3,
          'checkbox-group': ['A', 'B'],
          rate: 3.5,
        }}
      >
        <Form.Item
          name="companyName"
          label="Название компании"
          rules={[
            {
              required: true,
              message: 'Please select your company!',
              type: 'string',
            },
          ]}
        >
          <Input mode="multiple" placeholder="Введи название компании" />
        </Form.Item>
        <Form.Item
          label="Направление"
          name="direction"
          rules={[
            {
              required: true,
              message: 'Please select your Direction!',
            },
          ]}
        >
          <Select placeholder="Выбери направление">
            <Option value="Frontend">Frontend</Option>
            <Option value="Backend">Backend</Option>
            <Option value="FullStack">FullStack</Option>
          </Select>
        </Form.Item>
        <Form.Item name="salary" label="Зарплата (рублей)">
          <Slider
            min={50000}
            max={150000}
            step={10000}
            tooltipVisible={false}
            marks={{
              50000: 50000,
              60000: 60000,
              70000: 70000,
              80000: 80000,
              90000: 90000,
              100000: 100000,
              110000: 110000,
              120000: 120000,
              130000: 130000,
              140000: 140000,
              150000: 150000,
            }}
          />
        </Form.Item>
        <Form.Item name="hrName" label="Имя HR">
          <Input placeholder="Введи имя" />
        </Form.Item>
        <Form.Item name="questions" label="Вопросы с собеседования">
          <Input.TextArea placeholder="Писать сюда" />
        </Form.Item>
        <Form.Item name="codFile" label="Link to see code">
          <Input.TextArea placeholder="Write here" />
        </Form.Item>
        <Form.Item name="impression" label="Общее впечатление о собеседовании">
          <Input.TextArea placeholder="Писать сюда" />
        </Form.Item>
        <Form.Item name="setteled" label="Чекни">
          <Radio.Group>
            <Radio value="true">Устроился</Radio>
            <Radio value="false">Не устроился</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="rating" label="Общая оценка">
          <Rate
            defaultValue={3}
            character={({ index }) => customIcons[index + 1]}
          />
        </Form.Item>
        <Form.Item
          name="image"
          label="Загрузить файлы с собеседования"
          valuePropName="image"
          getValueFromEvent={normFile}
        >
          <input type="file" />
          {/* <Upload listType="picture" multiple="true">
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload> */}
        </Form.Item>

        <Divider plain></Divider>
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Добавить отзыв
          </Button>
        </Form.Item>
      </Form>
      <Divider></Divider>
    </>
  );
};
export default AddReview;
