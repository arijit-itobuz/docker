const data = [
    {
        id: '7c432492-c703-44ec-846e-4e9084e47b30',
        name: 'Super Admin',
        roleSlug: 'SUPER_ADMIN',
        capabilities: [
            101, 102, 111, 112, 131, 132, 141, 142, 151, 152, 153, 154, 171, 172, 173,
            174, 191, 192, 193, 194, 201, 202, 203, 204, 211, 212, 221, 231, 232, 241,
            242, 243, 244, 251, 261, 262, 263, 264, 281, 282, 283, 284, 291, 301, 311,
            312, 313, 314, 321, 322, 324, 331, 341,
        ],
        isDefault: false,
        createdAt: '2023-01-17T17:56:53.001Z',
        updatedAt: '2023-12-05T12:10:16.333Z',
        deletedAt: null,
    },
    {
        id: '697aa7b8-3d38-4c91-b394-b78875ecb586',
        name: 'Facility Admin',
        roleSlug: 'FACILITY_ADMIN',
        capabilities: [
            101, 102, 132, 141, 142, 171, 172, 173, 174, 191, 192, 193, 194, 211, 212,
            231, 232, 241, 242, 243, 244, 251, 261, 262, 263, 264, 281, 282, 283, 284,
            301, 311, 312, 313, 314, 321, 322, 324, 331, 341,
        ],
        isDefault: false,
        createdAt: '2023-01-17T17:56:53.023Z',
        updatedAt: '2023-12-05T12:10:16.355Z',
        deletedAt: null,
    },
    {
        id: 'b567e29c-3783-4a48-8810-20801703d582',
        name: 'Counsellor',
        roleSlug: 'COUNSELLOR',
        capabilities: [
            101, 102, 111, 112, 121, 122, 123, 124, 131, 132, 141, 142, 151, 152, 153,
            154, 161, 162, 163, 164, 171, 174, 211, 212, 231, 232, 233, 261, 291, 311,
            312, 313, 314, 321, 322, 324, 331,
        ],
        isDefault: false,
        createdAt: '2023-01-17T17:56:53.038Z',
        updatedAt: '2023-12-05T12:10:16.360Z',
        deletedAt: null,
    },
    {
        id: '48e5f33b-6731-446e-8b2f-a3f43e833077',
        name: 'Patient',
        roleSlug: 'PATIENT',
        capabilities: [
            101, 102, 111, 112, 121, 122, 123, 124, 131, 132, 141, 142, 161, 165, 181,
            211, 231, 232, 233, 321, 322, 324, 331,
        ],
        isDefault: false,
        createdAt: '2023-01-17T17:56:53.046Z',
        updatedAt: '2023-12-05T12:10:16.363Z',
        deletedAt: null,
    },
    {
        id: '392e76b5-1307-4282-93b0-2e56ba5bb0bd',
        name: 'Supporter',
        roleSlug: 'SUPPORTER',
        capabilities: [
            101, 102, 111, 112, 121, 122, 123, 124, 131, 141, 142, 161, 211, 212, 331,
        ],
        isDefault: false,
        createdAt: '2023-12-05T12:10:16.367Z',
        updatedAt: '2023-12-05T12:10:16.368Z',
        deletedAt: null,
    },
];

const compare = {
    SUPER_ADMIN: [
        101, 102, 111, 112, 131, 132, 141, 142, 151, 152, 153, 154, 171, 172, 173,
        174, 191, 192, 193, 194, 201, 202, 203, 204, 211, 212, 221, 231, 232, 241,
        242, 243, 244, 251, 261, 262, 263, 264, 281, 282, 283, 284, 291, 301, 311,
        312, 313, 314, 321, 322, 324, 331, 341
    ],
    FACILITY_ADMIN: [
        101, 102, 132, 141, 142, 171, 172, 173, 174, 191, 192, 193, 194, 211, 212,
        231, 232, 241, 242, 243, 244, 251, 261, 262, 263, 264, 281, 282, 283, 284,
        301, 311, 312, 313, 314, 321, 322, 324, 331, 341,
    ],
    COUNSELLOR: [
        101, 102, 111, 112, 121, 122, 123, 124, 131, 132, 141, 142, 151, 152, 153,
        154, 161, 162, 163, 164, 171, 174, 211, 212, 231, 232, 233, 261, 291, 311,
        312, 313, 314, 321, 322, 324, 331,
    ],
    PATIENT: [
        101, 102, 111, 112, 121, 122, 123, 124, 131, 132, 141, 142, 161, 165, 181,
        211, 231, 232, 233, 321, 322, 324, 331,
    ],
    SUPPORTER: [
        101, 102, 111, 112, 121, 122, 123, 124, 131, 141, 142, 161, 211, 212, 331,
    ],
};

const logger = {
    is_SUPER_ADMIN_same: false,
    is_FACILITY_ADMIN_same: false,
    is_COUNSELLOR_same: false,
    is_PATIENT_same: false,
    is_SUPPORTER_same: false,
}

for (const e of data) {
    const db_capabilities_str = e.capabilities.sort((a, b) => a - b).join(',');

    if ((compare.SUPER_ADMIN.sort((a, b) => a - b).join(',') === db_capabilities_str) && e.roleSlug === 'SUPER_ADMIN') {
        console.log('SUPER_ADMIN data already available');
        logger.is_SUPER_ADMIN_same = true
    }

    if ((compare.FACILITY_ADMIN.sort((a, b) => a - b).join(',') === db_capabilities_str) && e.roleSlug === 'FACILITY_ADMIN') {
        console.log('FACILITY_ADMIN data already available');
        logger.is_FACILITY_ADMIN_same = true
    }

    if ((compare.COUNSELLOR.sort((a, b) => a - b).join(',') === db_capabilities_str) && e.roleSlug === 'COUNSELLOR') {
        console.log('COUNSELLOR data already available');
        logger.is_COUNSELLOR_same = true
    }

    if ((compare.PATIENT.sort((a, b) => a - b).join(',') === db_capabilities_str) && e.roleSlug === 'PATIENT') {
        console.log('PATIENT data already available');
        logger.is_PATIENT_same = true
    }


    if ((compare.SUPPORTER.sort((a, b) => a - b).join(',') === db_capabilities_str) && e.roleSlug === 'SUPPORTER') {
        console.log('SUPPORTER data already available');
        logger.is_SUPPORTER_same = true
    }
}


console.log(logger);