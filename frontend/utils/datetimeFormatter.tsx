function datetimeFormatter(datetime: string) {
    return new Date(datetime).toLocaleDateString('ja-JP');
};

export default datetimeFormatter;