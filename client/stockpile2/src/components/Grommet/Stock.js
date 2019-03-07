<Grommet theme={theme} full>
    <ResponsiveContext.Consumer>
        {size => (
            <Box fill>
                <Header />
                <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
                    <Box flex align="center" justify="center">
                        <Basket size="large" />
                        <Text>Basket</Text>
                    </Box>
                    {!showTopbar || size !== "small" ? (
                        <Collapsible direction="vertical" open={showTopbar}>
                            <Box
                                flex
                                direction="column"
                                width="medium"
                                background="light-2"
                                elevation="small"
                                align="center"
                                justify="center"
                            >
                                <Form
                                    onSubmit={({ value }) =>
                                        console.log("Submit", value)
                                    }
                                >
                                    <FormField
                                        label="Name"
                                        name="name"
                                        required
                                        validate={{ regexp: /^[a-z]/i }}
                                    />
                                    <FormField
                                        label="Type"
                                        name="type"
                                        component={Select}
                                        options={[
                                            "VEGETABLES",
                                            "GRAINS",
                                            "FRUITS",
                                            "PROTEIN",
                                            "DAIRY"
                                        ]}
                                    />
                                    <FormField
                                        label="Refrigerate?"
                                        name="frig"
                                        component={CheckBox}
                                        pad
                                    />

                                    <FormField label="Quantity" htmlFor="text-input">
                                        <TextInput
                                            id="text-input"
                                            placeholder="placeholder"
                                            onChange={() => { }}
                                        />
                                    </FormField>

                                    <Box
                                        direction="row"
                                        justify="between"
                                        margin={{ top: "medium" }}
                                    >
                                        <Button label="Cancel" />
                                        <Button type="submit" label="ADD" primary />
                                    </Box>
                                </Form>
                            </Box>
                        </Collapsible>
                    ) : (
                            <Layer>
                                <Box
                                    background="light-2"
                                    tag="header"
                                    justify="end"
                                    align="center"
                                    direction="column"
                                >
                                    <Button
                                        icon={<FormClose size="large" />}
                                        onClick={() =>
                                            this.setState({ showSidebar: false })
                                        }
                                    />
                                </Box>
                                <Box
                                    fill
                                    background="light-2"
                                    align="center"
                                    justify="center"
                                />
                            </Layer>
                        )}
                    // Side BAR
                    {!showSidebar || size !== "small" ? (
                        <Collapsible direction="horizontal" open={showSidebar}>
                            <Box
                                flex
                                width="medium"
                                background="light-2"
                                elevation="small"
                                align="center"
                                justify="center"
                            >
                                <Table caption="Simple Table">
                                    <TableHeader>
                                        <TableRow>
                                            {COLUMNS.map(c => (
                                                <TableCell
                                                    key={c.property}
                                                    scope="col"
                                                    border="bottom"
                                                    align={c.align}
                                                >
                                                    <Text>{c.label}</Text>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {DATA.map(datum => (
                                            <TableRow key={datum.id}>
                                                {COLUMNS.map(c => (
                                                    <TableCell
                                                        key={c.property}
                                                        scope={c.dataScope}
                                                        align={c.align}
                                                    >
                                                        <Text>
                                                            {c.format
                                                                ? c.format(datum)
                                                                : datum[c.property]}
                                                        </Text>
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapsible>
                    ) : (
                            <Layer>
                                <Box
                                    background="light-2"
                                    tag="header"
                                    justify="end"
                                    align="center"
                                    direction="row"
                                >
                                    <Button
                                        icon={<FormClose size="large" />}
                                        onClick={() =>
                                            this.setState({ showSidebar: false })
                                        }
                                    />
                                </Box>
                                <Box
                                    fill
                                    background="light-2"
                                    align="center"
                                    justify="center"
                                >
                                    <Table caption="Simple Table">
                                        <TableHeader>
                                            <TableRow>
                                                {COLUMNS.map(c => (
                                                    <TableCell
                                                        key={c.property}
                                                        scope="col"
                                                        border="bottom"
                                                        align={c.align}
                                                    >
                                                        <Text>{c.label}</Text>
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {DATA.map(datum => (
                                                <TableRow key={datum.id}>
                                                    {COLUMNS.map(c => (
                                                        <TableCell
                                                            key={c.property}
                                                            scope={c.dataScope}
                                                            align={c.align}
                                                        >
                                                            <Text>
                                                                {c.format
                                                                    ? c.format(datum)
                                                                    : datum[c.property]}
                                                            </Text>
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </Box>
                            </Layer>
                        )}
                    )}
              </Box>
            </Box>
        )}
    </ResponsiveContext.Consumer>
</Grommet>