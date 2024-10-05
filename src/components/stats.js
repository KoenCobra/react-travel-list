export function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding some items to your list 🚀</em>
      </p>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {totalItems === packedItems
          ? "All done! Happy traveling 🛫"
          : `You have ${totalItems} items on your list, and you already packed
        ${packedPercentage} %`}
      </em>
    </footer>
  );
}
