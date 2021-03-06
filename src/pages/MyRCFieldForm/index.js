import React, { useEffect } from "react";
import Input from "../../components/Input";
import Form, { Field, useForm } from "../../components/my-rc-field-form";

const nameRule = { required: true, message: "please input username!" };
const passwordRule = { required: true, message: "please input password!" };

// export default function MyRCFieldForm(props) {
//     const [form]=Form.useForm();

//     const onFinish=val=>{
//         console.log("onFinish",val);
//     }

//     useEffect(()=>{
//         form.setFieldsValue({username:"default"});
//     },[])

//     const onFinishFailed=val=>{
//         console.log("onFinishFailed",val);

//     }

//     return (
//         <>
//             <h3>MyRCFieldForm</h3>
//             <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//                 <Field name="username" rules={[nameRule]}>
//                     <Input placeholder="username"/>
//                 </Field>
//                 <Field name="password" rules={[passwordRule]}>
//                     <Input placeholder="password"/>
//                 </Field>
//                 <button>Submit</button>
//             </Form>
//         </>
//     )
// }

export default class MyRCFieldForm extends React.Component {

    formRef = React.createRef();
    componentDidMount() {
        this.formRef.current.setFieldsValue({username:"default"});
    }

    onFinish = val => {
        console.log("onFinish", val);
    }


    onFinishFailed = (val,err) => {
        console.log("onFinishFailed", val,err);

    }

    render() {
        const { num } = this.state;
        return (
            <>
                <h3>MyRCFieldForm</h3>
                <Form ref={this.formRef} onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                    <Field name="username" rules={[nameRule]}>
                        <Input placeholder="username" />
                    </Field>
                    <Field name="password" rules={[passwordRule]}>
                        <Input placeholder="password" />
                    </Field>
                    <button>Submit</button>
                </Form>
            </>
        )
    }
}