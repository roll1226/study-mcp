import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("有効なメールアドレスを入力してください"),
  password: z.string().min(6, "パスワードは6文字以上で入力してください"),
});

type SignInFormData = z.infer<typeof schema>;

export const useAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback((data: SignInFormData) => {
    console.log("サインインデータ:", data);
    // サインイン処理をここに記述
  }, []);

  return { register, handleSubmit, errors, onSubmit };
};
