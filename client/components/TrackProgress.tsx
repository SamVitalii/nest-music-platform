interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e: any) => void;
}

const fmtMSS = (s: number) => (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;

const TrackProgress = ({ left, right, onChange }: TrackProgressProps) => {
    return (
        <div style={{ display: "flex" }}>
            <input
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
            />
            {(right !== 100)
                ? <div>{fmtMSS(left)} / {fmtMSS(right)}</div>
                : <div>{left}%</div>
            }
        </div>
    );
};

export default TrackProgress;