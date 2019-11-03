export const findByAttr = (component, attribValue) => {
  const wrapper = component.find(`[data-qa='${attribValue}']`)
  return wrapper
}

export default findByAttr
