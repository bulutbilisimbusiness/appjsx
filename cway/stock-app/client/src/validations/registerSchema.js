import { object, string } from "yup";
export const registerSchema = object({
	username: string()
		.max(20, "Kullanıcı adı 10 karakterden az olmalıdır.")
		.required("username zorunludur"),
	first_name: string()
		.max(20, "İsim 20 karakterden az olmalıdır.")
		.required("first_name zorunludur"),
	last_name: string()
		.max(20, "Soyisim 30 karakterden az olmalıdır.")
		.required("last_name zorunludur"),

	email: string().email().required("Email zorunludur"),
	password: string()
		.required("password zorunludur")
		.min(8, "password en az 8 karakter olmalıdır")
		.max(20, "password en fazla 20 karakter olmalıdır")
		.matches(/\d+/, "Password bir sayı içermelidir")
		.matches(/[a-z]/, "Password bir küçük harf içermelidir")
		.matches(/[A-Z]/, "Password bir büyük harf içermelidir")
		.matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
});
