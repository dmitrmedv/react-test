export function Checker({ checkExecutor }) {
  return (
    <form onChange={checkExecutor}>
      <label>
        СТОВГ
        <input type="checkbox" name="stovg" value="СТОВГ" />
      </label>
      <label>
        СКПГА
        <input type="checkbox" name="skpga" value="СКПГА" />
      </label>
      <label>
        СКПЛГ
        <input type="checkbox" name="skplg" value="СКПЛГ" />
      </label>
      <label>
        ВТВ
        <input type="checkbox" name="vtv" value="ВТВ" />
      </label>
    </form>
  );
}
