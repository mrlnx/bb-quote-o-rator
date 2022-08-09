import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useStoredList } from "./useStoredList";

describe("useStoredList", () => {
  const setup = () => renderHook(() => useStoredList<number>("test-key", 5));

  it("should show items", async () => {
    const { result } = setup();

    act(() => {
      result.current.add(1);
      result.current.add(3);
    });

    expect(result.current.items).toContain(1);
    expect(result.current.items).toContain(3);
  });

  it("should remove item", () => {
    const { result } = setup();

    act(() => {
      result.current.add(1);
      result.current.add(3);
    });

    expect(result.current.items).toContain(1);
    expect(result.current.items).toContain(3);

    act(() => {
      result.current.add(1);
      result.current.remove(3);
    });

    expect(result.current.items).toContain(1);
    expect(result.current.items).not.toContain(3);
  });
});
