import { Room } from "../Room";
import { CollaborativeApp } from "../page";

export default function Page() {
  return (
    // isme layout bne ga
    <Room>
      <div>
        <div>
          <div className="image"></div>
          <div className="whiteboard"></div>
        </div>
        <div>
          <div className="quickAccess"></div>
          <div className="activeUsers"></div>
        </div>
      </div>
    </Room>
  );
}
