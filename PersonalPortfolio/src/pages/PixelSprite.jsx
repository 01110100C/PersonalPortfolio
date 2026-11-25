// Tiny pixel-art renderer: each sprite is a grid of characters, each
// character maps to a color in the palette ("." = transparent).

const PALETTE = {
  "#": "#1c2a3d", // outline
  o: "#5a6f8c", // controller body
  w: "#e8eef7", // white
  r: "#e0565b", // red
  g: "#5fbf6a", // green
  b: "#4f8fe0", // blue
  y: "#f2c14e", // yellow
  m: "#6d7f99", // mountain / wall
  d: "#3f4f66", // dark shade
  t: "#2f7a43", // trees
  k: "#0b1220", // ball holes
  n: "#8a5cd6", // bowling ball
  f: "#8a6a45", // lane / wood
  c: "#2a3a52", // chip body
  p: "#c9ced8", // chip pins
  s: "#4a3a2c", // climbing wall
};

const SPRITES = {
  climbing: [
    "ssssssssssssssss",
    "ssssrsssssssgsss",
    "sssswssssssswsss",
    "ssssswswwswsssss",
    "ssssssswwsssssss",
    "sssssswwwwssssss",
    "sssssssbbssssyss",
    "sssssssbbsssssss",
    "ssssssbbbbssssss",
    "sgssswssssswssss",
    "ssssswssssswssss",
    "sssyswssssswbsss",
    "ssssssssssssssss",
    "ssssssssssrsssss",
  ],
  gaming: [
    "...##########...",
    "..#oooooooooo#..",
    ".#oowoooooooro#.",
    ".#owwwooooobog#.",
    ".#oowoooooooyo#.",
    ".#oooooooooooo#.",
    ".#ooo######ooo#.",
    ".#oo#......#oo#.",
    "..##........##..",
  ],
  hiking: [
    "............yy..",
    "......w....yyyy.",
    ".....www....yy..",
    "....wwmww.......",
    "...mmmmmmm......",
    "..mmmmdmmmm.m...",
    ".mmmmddmmmmmmm..",
    "mmmmdddmmmmmmmm.",
    "mmmddddmmmmmmmmm",
    "tttttttttttttttt",
    "tddttttdtttttdtt",
  ],
  bowling: [
    "...ww...........",
    "..wwww..........",
    "..wwww..........",
    "...rr...........",
    "...ww...........",
    "..wwww..........",
    ".wwwwww....nnn..",
    ".wwwwww...nnnnn.",
    ".wwwwww..nnknknn",
    ".wwwwww..nnnknnn",
    "..wwww...nnnnnnn",
    "..wwww....nnnnn.",
    "..wwww.....nnn..",
    "ffffffffffffffff",
  ],
  hardware: [
    "...p.p.p.p.p...",
    "...p.p.p.p.p...",
    "..ddddddddddd..",
    "ppdwccccccccdpp",
    "..dcccccccccd..",
    "ppdccyyyyyccdpp",
    "..dccyyyyyccd..",
    "ppdccyyyyyccdpp",
    "..dccyyyyyccd..",
    "ppdccyyyyyccdpp",
    "..dcccccccccd..",
    "ppdcccccccccdpp",
    "..ddddddddddd..",
    "...p.p.p.p.p...",
    "...p.p.p.p.p...",
  ],
};

export default function PixelSprite({ sprite, size = 64, title }) {
  const rows = SPRITES[sprite];
  if (!rows) return null;
  const width = Math.max(...rows.map((r) => r.length));
  const height = rows.length;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${width} ${height}`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={title}
    >
      {rows.flatMap((row, y) =>
        [...row].map((ch, x) =>
          PALETTE[ch] ? (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={PALETTE[ch]} />
          ) : null
        )
      )}
    </svg>
  );
}
