import styles from './DummyComponent.module.css';

export type DummyComponentProps = JSX.IntrinsicElements['div'];

export function DummyComponent(props: DummyComponentProps) {
  return <div className={styles.wrapper} {...props} />;
}
