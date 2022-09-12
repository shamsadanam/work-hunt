import workhunt from "../apis/workhunt";

export const _checkEmail = async (inputEmail) => {
  const { data } = await workhunt.get("/recruiters");
  const search = data.find((user) => user.email === inputEmail);
  return search;
};
