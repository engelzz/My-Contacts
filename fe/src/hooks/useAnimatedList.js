import { useCallback, useState } from 'react';

export default function useAnimatedList(initialValue = []) {
  const [items, setItems] = useState(initialValue);
  const [pendingRemovalItemsIds, setPendingRemovalItemsIds] = useState([]);

  const handleRemoveItems = useCallback((id) => {
    setPendingRemovalItemsIds(
      (prevState) => [...prevState, id],
    );
  }, []);

  const handleAnimationEnd = useCallback((id) => {
    setItems((prevState) => prevState.filter((message) => message.id !== id));
    setPendingRemovalItemsIds(
      (prevState) => prevState.filter((messageId) => messageId !== id),
    );
  }, []);

  return {
    items,
    setItems,
    pendingRemovalItemsIds,
    handleRemoveItems,
    handleAnimationEnd,
  };
}
