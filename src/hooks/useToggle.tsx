import { useCallback, useState } from "react";


type TogglerSignature = (v?: boolean) => void;

export function useToggle(initialState: boolean = false): [boolean, TogglerSignature] {
  const [value, setValue] = useState<boolean>(initialState);

  const toggler = useCallback((newValue?: boolean) => {

    if (typeof newValue === "boolean") {
      setValue(newValue)
      return
    }

    setValue((v) => (!v))
  }, [setValue])


  return [value, toggler]
}
