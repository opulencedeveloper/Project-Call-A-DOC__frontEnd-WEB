const BankDetails = (props) => {
  const { accountTypeTextStyle, accountType, accountNumber, bankName } = props;
  return (
    <div>
      <p className={`${accountTypeTextStyle} text-[18px]`}>{accountType}</p>
      <p className="text-[31px] text-ash2">{accountNumber}</p>
      <p className="text-[13px] text-ash2">{bankName}</p>
    </div>
  );
};

export default BankDetails;
