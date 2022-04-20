import { UseDelayedRenderProps } from "element-plus";
import { ref, getCurrentInstance } from "vue";

interface User {
    account: string;
    password: string;
}

export const loginUser = ref<User>({
    account: "",
    password: "",
});

interface Rules {
    account: {
        required: boolean;
        message: string;
        trigger: string;
    }[];
    password: {
        required: boolean;
        message: string;
        trigger: string;
    }[];
}
//校验规则
export const loginRules = ref<Rules>({
    account: [{ required: true, message: "账号不能为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
});