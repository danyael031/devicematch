import { useCallback, useState } from "react";

export function useFormState<T extends Object>(initialValue: Partial<T>): [Partial<T>, (newValue: Partial<T>) => void] {
  const [state, _setState] = useState<Partial<T>>(initialValue);

  const setState = useCallback((newValue: Partial<T>) => {
    _setState((currentState) => ({
      ...currentState,
      ...newValue
    }))

  }, [_setState])

  return [state, setState]
}
