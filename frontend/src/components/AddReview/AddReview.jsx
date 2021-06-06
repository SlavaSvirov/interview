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
  console.log('Upload event:', e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

// =================================Для загрузки файлов==================================

// const props = {
//   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
//   onChange({ file, fileList }) {
//     if (file.status !== 'uploading') {
//       console.log(file, fileList);
//     }
//   },
//   defaultFileList: [
//     {
//       uid: '1',
//       name: 'xxx.png',
//       status: 'done',
//       response: 'Server Error 500', // custom error message to show
//       url: 'http://www.baidu.com/xxx.png',
//     },
//     {
//       uid: '2',
//       name: 'yyy.png',
//       status: 'done',
//       url: 'http://www.baidu.com/yyy.png',
//     },
//     {
//       uid: '3',
//       name: 'zzz.png',
//       status: 'error',
//       response: 'Server Error 500', // custom error message to show
//       url: 'http://www.baidu.com/zzz.png',
//     },
//   ],
// };

// ===================================== Компонент ADDREVIEW =======================================

const AddReview = () => {
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    const dataReview = await axios.post('/review/newReview', {
      body: { ...values },
    });
    const newReview = dataReview.json();
    console.log(newReview);
  };

  return (
    <div>
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
              message: 'Пожалуйста, введи название компании!',
              type: 'string',
            },
          ]}
        >
          <Select placeholder="Введи название компании">
            <Option value="Яндекс">Яндекс</Option>
            <Option value="OZON">OZON</Option>
            <Option value="Стартап">Стартап</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="direction"
          label="Направление"
          rules={[
            {
              required: true,
              message: 'Please select your country!',
            },
          ]}
        >
          <Select placeholder="Выбери направление">
            <Option value="china">Frontend</Option>
            <Option value="usa">Backend</Option>
            <Option value="usa">FullStack</Option>
          </Select>
        </Form.Item>

        <Form.Item name="position" label="Должность">
          <Input placeholder="Введи должность" />
        </Form.Item>

        <Form.Item name="salary" label="Зарплата (рублей)">
          <Slider
            min={0}
            max={100}
            step={10}
            tooltipVisible={false}
            marks={{
              0: '<50000',
              10: '60000',
              20: '70000',
              30: '80000',
              40: '90000',
              50: '100000',
              60: '120000',
              70: '140000',
              80: '160000',
              90: '180000',
              100: 'Читер',
            }}
          />
        </Form.Item>

        <Form.Item name="hrName" label="Имя HR">
          <Input placeholder="Введи имя" />
        </Form.Item>

        <Form.Item name="questions" label="Вопросы с собеседования">
          <Input.TextArea placeholder="Писать сюда" />
        </Form.Item>

        <Form.Item name="impression" label="Общее впечатление о собеседовании">
          <Input.TextArea placeholder="Писать сюда" />
        </Form.Item>

        <Form.Item name="setteled" label="Чекни">
          <Radio.Group>
            <Radio value="a">Устроился</Radio>
            <Radio value="b">Не устроился</Radio>
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
          {/* <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload> */}
          <Upload>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>

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
      <Divider plain></Divider>
    </div>
  );
};

export default AddReview;
