import axios from "axios";
import process from "process";

// function to fetch data from an API
export async function fetchData(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export default async function Home() {
  const short_urls = fetchData(`${process.env.API_HOST}:${process.env.API_PORT}/manage/urls`);

  return (
    <>
      <h1>Short URLs</h1>
      <ul>
        {short_urls.then((res) => {
          for (let index = 0; index < res.length; index++) {
            const element = res.data[index];
            console.log(res)
            console.table(res.data)
            return (
              <li>
                {element["target"]}
              </li>
            )
          }
        })
        }
      </ul>
    </>
  );
}
