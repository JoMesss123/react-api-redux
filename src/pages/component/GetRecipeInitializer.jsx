import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import OneRecipeService from "../service/OneRecipeSerice";
import { useDispatch } from "react-redux";
import { addRecipe } from "../store/recipeSlice";


const OneRecipeService = new OneRecipeService();

const GetRecipeInitializer = () => {
  const [startQuery, setStartQuery] = useState(false);
  const onClick = () => setStartQuery(true);

  const { data } = useQuery({
    queryKey: ["recipe"],
    queryFn: () => OneRecipeService.getAllRecipes(),
    enabled: startQuery,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(addRecipe(data.data));
    }
  }, [data]);

  return (
    <button type="button" onClick={onClick}>
      Start Query
    </button>
  );
};

export default GetRecipeInitializer;
