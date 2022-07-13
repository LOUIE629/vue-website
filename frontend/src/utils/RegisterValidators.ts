import { UseDelayedRenderProps } from "element-plus";
import { ref, getCurrentInstance } from "vue";

interface RegisterUser {
    account: string;
    password: string;
    confirmpassword: string;
}

export const registerUser = ref<RegisterUser>({
    account: "",
    password: "",
    confirmpassword: "",
});

interface RegisterRules {
    account: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;

    })[];

    password: {
        required: boolean;
        message: string;
        trigger: string;
    }[];

    confirmpassword: ({
        required: boolean;
        message: string;
        trigger: string;
    } | {
        validator: any;
        trigger: string;
    })[];
}

const validatePass2 = (rule:any, value:any, callback:any) => {
    if (value == '') {
        callback(new Error('请再次输入密码'));
    }else if (value !==registerUser.value.password) {
        callback(new Error('两次密码需一致'));
    }
}

//校验规则
export const registerRules = ref<RegisterRules>({

    confirmpassword: [
        { 
            required: true, 
            message: "密码不能为空", 
            trigger: "blur" 
        },
        {
            validator: validatePass2,
            trigger: 'blur',
        },
    ],

    password: [
        { 
            required: true, 
            message: "密码不能为空", 
            trigger: "blur" 
        },
    ],
    
    account: [
        {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
        },
        {   min: 3,
            max: 10, 
            message:'长度3到10', 
            trigger: 'blur'
        },
    ],
});