import React from 'react';
import {FC} from 'react';
import 'antd/es/button/style';
import { Card, Button, Typography, Tag } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text} = Typography;

const App: FC = () => {
  return (
    <div className="App">  
      <Card style={{ width: 300 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Title level={3} style={{ margin: 0 }}>Заголовок</Title>
        <Button type="link" icon={<EditOutlined style={{ color: 'gray', fontSize: '20px' }}/>} key="edit"/>
      </div>
      <Tag color='green' style={{ marginTop: 8 }}>Статус</Tag>
      <Paragraph style={{ marginTop: 16 }}>Описание ляляляляляляляляляляля аруцшкрукрцйгщкркйк</Paragraph>
      <Text type="secondary">Автор: example@mail.ru</Text>
      <br/>
      <Text type="secondary">Дата создания: 12.12.2024</Text>
      </Card>
    </div>
  );
}

export default App;
