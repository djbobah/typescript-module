//TODO Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL. Выведите их в консоль в формате: "ID: id, Email: email".

export type CommentType = {
  id: string;
  email: string;
  name?: string;
  body?: string;
};

export const getData = (url: string): Promise<CommentType[]> => {
  return fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("Что то пошло не так!!! ");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Ошибка API:", error);
      throw new Error(
        "Произошла ошибка при запросе на сервер: " + error.message
      );
    });
};

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
