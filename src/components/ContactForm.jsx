import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./Hook/formHook";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div>
        <label htmlFor="name">Full name</label>
        <input type="text" id="name" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" {...register("subject")} />
        <p>{errors.subject?.message}</p>
      </div>
      <div>
        <label htmlFor="massage">Massage</label>
        <textarea type="text" id="massage" style={{ resize: "none" }}{...register("massage")} />
        <p>{massage.email?.message}</p>
      </div>
      <button type="submit">Send in</button>
    </form>
  );
}

export default ContactForm;
