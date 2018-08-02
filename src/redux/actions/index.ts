function actionCreator(actionType: string, payload: any) {
    return { type: actionType, payload };
}

export { actionCreator };
