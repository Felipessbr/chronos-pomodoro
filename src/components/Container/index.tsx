import  style  from "./styles.module.css";

type ContainerPorps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerPorps) {
  return (
    <div className={style.container}>
      <div className={style.content}>{children}</div>
    </div>
  );
}
