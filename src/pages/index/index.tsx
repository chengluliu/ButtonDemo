import { useState } from 'react'
import { ActionSheet, Button, Cell, Radio } from '@nutui/nutui-react-taro';

import { Plus } from '@nutui/icons-react-taro';

import './index.scss'


const Demo = () => {
  const [val, setVal] = useState('')
  const [isVisible, setIsVisible] = useState(false);
  const options = [
    {
      name: '权限设置',
    },
    {
      name: '重命名',
    },
    {
      name: '删除',
    },
  ]

  const handleSelect = (item: any) => {
    setVal(item.name)
    setIsVisible(false)
  }

  return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', justifyItems: 'center'}}>
    <div className={'div_box'}>

      <Button
        shape="round"
        type="primary"
        icon={<Plus size="300"/>}
        style={{
          width: 300,
          height: 300
        }}

      />

    </div>

    <div className={'div_box'}>
      动作面板:
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>基础用法</span>
      </Cell>
    </div>
    <ActionSheet
      title="标题"
      visible={isVisible}
      options={options}
      onSelect={handleSelect}
      onCancel={() => setIsVisible(false)}
    />
  </div>
}
export default Demo;
