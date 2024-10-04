import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    item: yup.string().required(),
  })
  .required();

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const newItem = {
      id: Date.now(),
      description: data.item,
      quantity: data.amount,
      packed: false,
    };

    reset();
  };

  return (
    <form className='add-form' onSubmit={handleSubmit(onSubmit)}>
      <h3>What do you need for your trip?</h3>
      <select {...register("amount")}>
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type='search'
        placeholder='Item...'
        {...register("item", { required: true })}
      />
      <button type='submit'>Add</button>
      <p style={{ color: "yellow" }}>{errors.item?.message}</p>
    </form>
  );
}
