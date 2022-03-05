const completionSpec: Fig.Spec = {
  name: "generateAwsExports.sh",
  description: "",
  subcommands: [
    {
      name: "my_subcommand",
      description: "Example subcommand",
      subcommands: [
        {
          name: "my_nested_subcommand",
          description:
            "Nested subcommand, example usage: 'generateAwsExports.sh my_subcommand my_nested_subcommand'",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for generateAwsExports.sh",
    },
  ],
  // Only uncomment if generateAwsExports.sh takes an argument
  args: { API_KEY, ENDPOINT },
};
export default completionSpec;
