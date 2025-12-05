export function classNames(...args) {
  return args.filter(Boolean).join(' ');
}
// INFO: ClassNames Utility
// <button className={classNames("btn", isActive && "btn-primary")} />
