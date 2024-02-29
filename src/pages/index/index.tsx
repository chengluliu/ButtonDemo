
import { Button} from '@nutui/nutui-react-taro';

import {  Plus } from '@nutui/icons-react-taro';
const RadioGroupLast = () => {


  return <div style={{display:'flex', justifyContent:'center', alignItems:'center',justifyItems:'center'}}>
    <Button
      shape="round"
      type="primary"
      icon={<Plus size="300" />}
style={{
  width:300,
  height:300
}}

    />



  </div>
}
export default RadioGroupLast;
