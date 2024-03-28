import { Button, Radio } from '@nutui/nutui-react-taro';

import { Plus } from '@nutui/icons-react-taro';

import './index.scss'

const Demo = () => {



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
      <div className={'div_box'}>请查看Radio css样式
        right和 bottom 使用的样式变量都是 --nutui-radiogroup-radio-margin, 并没有使用文档上说的
        --nutui-radiogroup-radio-margin-bottom

      </div>
      <Radio.Group defaultValue="1" direction={'horizontal'}>
        <Radio shape="button" value="1">
          选项1
        </Radio>
        <Radio shape="button" value="2">
          选项2
        </Radio>
        <Radio shape="button" value="3">
          选项3
        </Radio>
      </Radio.Group>
    </div>

  </div>
}
export default Demo;
